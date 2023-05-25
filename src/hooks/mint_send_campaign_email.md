# Email Campaign

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_send_campaign_email',10,1)```

This action runs when an email campaign has been launched.

## Hook Arguments

| Argument     | Type       | Description                            |
|--------------|------------|----------------------------------------|
| `messages`      | _`array`_  |   An array of email messages that were sent.  |


## Usage

```
function my_custom_function( $messages ) {
    // Perform custom logic here.
}
add_action( 'mailmint_send_campaign_email', 'my_custom_function', 10, 1 );
```

In the example above, my_custom_function is a custom function that will be called when the mrm_send_campaign_email hook is triggered. The function takes one parameter, $messages, which is the same parameter passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mrm_send_campaign_email hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 1 parameter specifies the number of parameters the callback function expects.
