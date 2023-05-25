# Plugin Loaded 

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_loaded')```

This action is triggered when the Mail Mint plugin is loaded.


## Usage

```
function my_custom_function() {
    // Perform custom logic here.
}
add_action( 'mailmint_loaded', 'my_custom_function' );

```

In the example above, my_custom_function is a custom function that will be called when the mailmint_loaded hook is triggered. The function does not take any parameters.
The add_action() function is used to register my_custom_function as a callback for the mailmint_loaded hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 0 parameter specifies the number of parameters the callback function expects. Since this hook does not accept any parameters, the 0 parameter is used.
