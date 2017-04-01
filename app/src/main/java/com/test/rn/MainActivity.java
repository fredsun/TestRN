package com.test.rn;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView();
    }

    private void initView() {
        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.btn:
                if (Build.VERSION.SDK_INT >=23){
                    if (!Settings.canDrawOverlays(this)){
                        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                        startActivity(intent);
                        return;
                    }else {

                    }
                }else {

                }
                Intent i = new Intent(MainActivity.this, MyReactActivity.class);
                startActivity(i);
            break;
//            case R.id.btn:
//                Intent intent = new Intent(MainActivity.this, MyReactActivity.class);
//                startActivity(intent);
//                break;
        }
    }
}
