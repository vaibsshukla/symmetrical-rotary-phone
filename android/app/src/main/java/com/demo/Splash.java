package com.demo;


import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatDelegate;



public class Splash extends AppCompatActivity implements  Runnable {

    static {
        AppCompatDelegate.setCompatVectorFromResourcesEnabled(true);
    }
    ImageView image1,image2,image3 ;


    private Handler handler = new Handler();
    private Runnable runnable = () -> {
        finish();

    };
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_splash);
    }
    @Override
    protected void onResume() {
        super.onResume();
        handler.postDelayed(runnable, 5000);

    }

    @Override
    protected void onPause() {
        super.onPause();
        handler.removeCallbacks(runnable);
    }

    @Override
    public void run() {

    }
}
