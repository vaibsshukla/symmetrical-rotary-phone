package com.demo;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.content.Intent;

public class MainActivity extends ReactActivity {
  boolean shown = false;

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */



  @Override
  protected String getMainComponentName() {
    return "demo";
  }



  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
        Intent inten = new Intent(this, Splash.class);
        startActivity(inten);
    }

  }


