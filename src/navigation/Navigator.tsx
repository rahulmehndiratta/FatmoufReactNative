import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {registerScreens, screenName} from '@screenName';
import {color} from '@styles';
import {LogBox} from 'react-native';

registerScreens();

export const Navigator = {
  setSplash(screenName: any) {
    LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(['flexWrap:']);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    Navigation.events().registerAppLaunchedListener(async () => {
      this.setDefault();
      this.setRoot(screenName);
    });
  },

  setHome() {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BOTTOM_TABS_LAYOUT',
          children: [
            {
              stack: {
                id: screenName.Competitive,
                children: [
                  {
                    component: {
                      id: screenName.Competitive,
                      name: screenName.Competitive,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('@images/bottomTab/menu-trophy.png'),
                    text: 'Competitive',
                  },
                },
              },
            },
            {
              stack: {
                id: screenName.TalkYoTalk,
                children: [
                  {
                    component: {
                      id: screenName.TalkYoTalk,
                      name: screenName.TalkYoTalk,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('@images/bottomTab/menu_chat.png'),
                    text: 'Talk Yo Talk',
                  },
                },
              },
            },
            {
              stack: {
                id: screenName.Profile,
                children: [
                  {
                    component: {
                      id: screenName.Profile,
                      name: screenName.Profile,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('@images/bottomTab/menu-user-profile.png'),
                    text: 'Profile',
                  },
                },
              },
            },
            {
              stack: {
                id: screenName.Notification,
                children: [
                  {
                    component: {
                      id: screenName.Notification,
                      name: screenName.Notification,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('@images/bottomTab/menu-noti.png'),
                    text: 'Notification',
                  },
                },
              },
            },
            // {
            //   stack: {
            //     id: screenName.Profile,
            //     children: [
            //       {
            //         component: {
            //           id: screenName.Profile,
            //           name: screenName.Profile,
            //         },
            //       },
            //     ],
            //     options: {
            //       bottomTab: {
            //         icon: require('@images/bottomTab/ic_profile.png'),
            //         text: 'Profile',
            //       },
            //     },
            //   },
            // },
          ],
        },
      },
    });
  },

  setRoot(screenName: any, propsData?: any) {
    Navigation.setRoot({
      root: {
        stack: {
          id: screenName,
          children: [
            {
              component: {
                id: screenName,
                name: screenName,
                passProps: {propsData},
              },
            },
          ],
        },
      },
    });
  },

  setPush(componentId: any, screenName: any, propsData?: any) {
    Navigation.push(componentId, {
      component: {
        name: screenName,
        id: screenName,
        passProps: {propsData},
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true,
          },
          sideMenu: {
            left: {
              visible: false,
            },
          },
        },
      },
    });
  },

  setPop(componentId: any) {
    Navigation.pop(componentId);
  },

  setPopTo(screenName: any) {
    Navigation.popTo(screenName);
  },

  setPopToRoot(componentId: any) {
    Navigation.popToRoot(componentId);
  },

  showMenu(componentId: any) {
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          // width: Utils.calculateWidth(250),
          visible: true,
        },
      },
    });
  },
  hideMenu(componentId: any) {
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
  },

  setBottomTab(tabId: any, tabIndex: any) {
    Navigation.mergeOptions(tabId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
      bottomTabs: {
        currentTabIndex: tabIndex,
      },
    });
  },

  showModal(screenName: any, propsData?: any) {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              id: screenName,
              name: screenName,
              passProps: {propsData},
              options: {
                overlay: {
                  interceptTouchOutside: true, // this make touch events pass through the invisible parts of the overlay
                },
                modalPresentationStyle:
                  OptionsModalPresentationStyle.overCurrentContext,
                // screenBackgroundColor: 'red',

                layout: {
                  backgroundColor: '#25222238',
                  componentBackgroundColor: '#25222238',
                  orientation: ['portrait'],
                },
                // topBar: {
                //     title: {
                //         text: '',
                //     },
                // },
              },
            },
          },
        ],
      },
    });
  },

  dismissModal() {
    Navigation.dismissAllModals();
  },

  showLoader(isLoading: boolean) {
    if (isLoading === true) {
      Navigation.showOverlay({
        component: {
          name: screenName.MyLoader,
          id: screenName.MyLoader,
          options: {
            overlay: {
              interceptTouchOutside: false,
            },
            layout: {
              backgroundColor: '#25222238',
              componentBackgroundColor: '#25222238',
              orientation: ['portrait'],
            },
          },
        },
      });
    } else {
      Navigation.dismissOverlay(screenName.MyLoader);
    }
  },

  showAlert(
    msg: string,
    type = 'danger' || 'info' || 'success' || 'warning',
    milliSecond?: number,
  ) {
    Navigation.showOverlay({
      component: {
        name: screenName.MyFlash,
        id: screenName.MyFlash,
        passProps: {
          msg: msg,
          type: type,
        },
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
            orientation: ['portrait'],
          },
        },
      },
    })
      .then(() => {
        setTimeout(() => {
          Navigation.dismissOverlay(screenName.MyFlash);
        }, milliSecond ?? 1000);
      })
      .catch(err => {
        Navigation.dismissOverlay(screenName.MyFlash);
      });
  },

  setDefault() {
    Navigation.setDefaultOptions({
      topBar: {
        visible: false,
      },
      bottomTab: {
        iconColor: color.white,
        selectedIconColor: color.success,
        // iconHeight: 24,
        // iconWidth: 24,
        textColor: color.white,
        selectedTextColor: color.white,
        iconInsets: {
          // top: 5,
        },
      },
      bottomTabs: {
        backgroundColor: color.bottomBar,
        titleDisplayMode: 'alwaysShow',
      },
      statusBar: {
        backgroundColor: color.appBar,
        // style: 'light',
      },
      layout: {orientation: ['portrait']},
    });
  },
};
