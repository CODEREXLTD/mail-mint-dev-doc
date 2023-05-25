# Plugin Installed

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_post_install',10,1)```

This action is triggered when the Mail Mint plugin is installed

## Hook Arguments

| Argument     | Type    | Description                            |
|--------------|---------|----------------------------------------|
| `new_version`      | _`int`_ | The new version of the MailMintplugin that was just installed.  |


## Usage

```
function my_custom_function( $new_version ) {
    // Perform custom logic here.
}
add_action( 'mailmint_post_install', 'my_custom_function', 10, 1 );
```

In the example above, my_custom_function is a custom function that will be called when the mrm_post_install hook is triggered. The function takes one parameter, $new_version, which is the same parameter passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mrm_post_install hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 1 parameter specifies the number of parameters the callback function expects.
