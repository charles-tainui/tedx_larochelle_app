/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <Firebase.h>
#import "AppDelegate.h"
#import "RNSplashScreen.h"

#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import "RNGoogleSignin.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  
  [[FBSDKApplicationDelegate sharedInstance] application:application
                           didFinishLaunchingWithOptions:launchOptions];
  
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"tedx_larochelle_app"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [RNSplashScreen show];
  
  return YES;
}


- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  
  BOOL handledGoogle = [RNGoogleSignin application:application
                                           openURL:url
                                 sourceApplication:sourceApplication
                                        annotation:annotation];
  
  BOOL handledFacebook = [[FBSDKApplicationDelegate sharedInstance] application:application
                                                                        openURL:url
                                                              sourceApplication:sourceApplication
                                                                     annotation:annotation];
  return handledFacebook || handledGoogle;
}


/*
 - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
 sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
 
 return [[FBSDKApplicationDelegate sharedInstance] application:application
 openURL:url
 sourceApplication:sourceApplication
 annotation:annotation
 ]
 || [RNGoogleSignin application:application
 openURL:url
 sourceApplication:sourceApplication
 annotation:annotation
 ];
 }
 
 
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  
  return [RNGoogleSignin application:application
                      openURL:url
            sourceApplication:sourceApplication
                   annotation:annotation
   ];
}


- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                        openURL:url
                                              sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey]
                                                     annotation:options[UIApplicationOpenURLOptionsAnnotationKey]
          ]
  || [RNGoogleSignin application:application
                           openURL:url
               sourceApplication:sourceApplication
                      annotation:annotation
      ];
}

 */



- (void)applicationDidBecomeActive:(UIApplication *)application {
  [FBSDKAppEvents activateApp];
}


@end
