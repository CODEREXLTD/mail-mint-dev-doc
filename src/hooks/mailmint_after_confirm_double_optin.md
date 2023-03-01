# Mail Mint after confirm double optin


<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action('mailmint_after_confirm_double_optin',10,2)```

Fires when a contact is added to a list.


## Hook Arguments

| Argument     | Type       | Description                            |
|--------------|------------|----------------------------------------|
| `contact`      | _`Object`_ | The contact object that was confirmed.  |
| `contact_id` | _`int`_    | The ID of the contact that was created or updated as a result of the form submission  |


## Usage

```
function my_custom_function( $contact ) {
    // Perform custom logic here.
}
add_action( 'mailmint_after_confirm_double_optin', 'my_custom_function', 10, 1 );


```

In the example above, my_custom_function is a custom function that will be called when the mail_mint_after_confirm_double_optin hook is triggered. The function takes one parameter, $contact, which is the same parameter passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mail_mint_after_confirm_double_optin hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 1 parameter specifies the number of parameters the callback function expects.
