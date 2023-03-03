# Email batch scheduling process

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_email_batch_scheduling_process',10,1)```

Fires when the MailMint plugin is processing the email batch scheduling process.


## Hook Arguments

| Argument     | Type       | Description                            |
|--------------|------------|----------------------------------------|
| `args`      | _`array`_  |  An array of arguments used in the email batch scheduling process.  |


## Usage

```
function my_custom_function( $args ) {
    // Perform custom logic here.
}
add_action( 'mailmint_email_batch_scheduling_process', 'my_custom_function', 10, 1 );

```

In the example above, my_custom_function is a custom function that will be called when the mailmint_email_batch_scheduling_process hook is triggered. The function takes one parameter, $args, which is the same parameter passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mailmint_email_batch_scheduling_process hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 1 parameter specifies the number of parameters the callback function expects.
