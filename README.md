# GridyHub
A Repository to put everything related with my proto-so-called-company "Gridy". This! This is what means GridyHub. This! This is what will change your life.

## Some Tips 
**Android Studio: No Action Bar**
```XML
<android:theme="@style/Theme.AppCompat.Light.NoActionBar">
```
**Android Studio: Portrait/Landscape**
```XML
<activity android:name=".MainActivity" android:screenOrientation="portrait"
            android:configChanges="keyboardHidden|orientation|screenSize" >
```
**Check if Smartphone has bluetooth**
```Java
private void checkBTState() {
        // Check device has Bluetooth and that it is turned on
        mBtAdapter=BluetoothAdapter.getDefaultAdapter(); //Acess Bluetooth Module from the Smartphone
        if(mBtAdapter==null) //if mBtAdapter has a 'null' value it means the cellphone does not have a bluetooth adapter
        {
            Toast.makeText(getBaseContext(), "Device does not support Bluetooth", Toast.LENGTH_SHORT).show();//Send a Toast to the user
        } 
        else //if mBtAdapter has some value(don't know what), it will check if it is ON or OFF
        {
            if (mBtAdapter.isEnabled())//in this case Bluetooth is ON
            {
                Log.d(TAG, "...Bluetooth ON...");
            } 
            else 
            {
                //Prompt user to turn on Bluetooth
                Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);//Send a Request to use Bluetooth and turn it ON
                startActivityForResult(Your_Activity, 1);

            }
        }
    }
```
**Request acess to Bluetooth module**
```XML
<uses-permission android:name="android.permission.BLUETOOTH"/>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
```
**Get paired phones/bluetooths by this Smartphone**
```Java
Set<BluetoothDevice> pairedDevices = mBtAdapter.getBondedDevices();
```

