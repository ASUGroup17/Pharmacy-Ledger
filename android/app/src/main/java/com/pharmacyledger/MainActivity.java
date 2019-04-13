package com.pharmacyledger;

//import com.facebook.react.ReactActivity; //this was commented out -cal us115 11/24
import android.os.Bundle; // added us15 11/24 cal

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.controllers.SplashActivity;
import org.devio.rn.splashscreen.SplashScreen; // import this us115
import android.content.Intent; // orientation
import android.content.res.Configuration; // orientation

public class MainActivity extends SplashActivity {

    // added for orientation package
    @Override
    public void onConfigurationChanged(Configuration newConfig){
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    //@Override
    //protected String getMainComponentName() {
    //    return "PharmacyLedger";
    //}

    //added us115 11/24 -cal to implement the splashscreen
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
}
