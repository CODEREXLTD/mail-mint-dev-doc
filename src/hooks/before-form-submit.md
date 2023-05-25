# Before Form Submission

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```do_action(''mailmint_before_form_submit'',10,2)```

This action is triggered before a form is submitted to Mail Mint


## Hook Arguments

| Argument   | Type        | Description                            |
|------------|-------------|----------------------------------------|
| `form_id`  | _`int`_     | The ID of the form that was submitted  |
| `contact` | _`object`_     | The object that represents the contact that was created or updated.|


## Usage

```
function my_custom_function( $form_id, $contact ) {
    // Perform custom logic here.
}
add_action( 'mailmint_before_form_submit', 'my_custom_function', 10, 2 );
```

In the example above, my_custom_function is a custom function that will be called when the mrm_before_form_submit hook is triggered. The function takes two parameters, $form_id and $contact, which are the same parameters passed to the hook when it is triggered.
The add_action() function is used to register my_custom_function as a callback for the mrm_before_form_submit hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 2 parameter specifies the number of parameters the callback function expects.
