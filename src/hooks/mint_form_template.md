# Form template

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />

```apply_filters('mint_form_template',10,1)```

Filters the form template in the MailMint plugin.



## Hook Arguments

| Argument     | Type       | Description                            |
|--------------|------------|----------------------------------------|
| `forms`      | _`array`_  |   The list of allowed blocks for the form builder|.
|


## Usage

```
function my_custom_function( $forms ) {
    // Modify the email form template here.
    return $forms;
}
add_filter( 'mint_form_template', 'my_custom_function', 10, 1 );


```
In the example above, my_custom_function is a custom function that will be called when the mint_mail_form_template hook is triggered. The function takes one parameter, $forms, which is the same parameter passed to the hook when it is triggered. The function modifies the email form template and returns the modified HTML.
The add_filter() function is used to register my_custom_function as a filter for the mint_mail_form_template hook. The 10 parameter specifies the priority of the hook (i.e. when it should be executed relative to other hooks with the same name), and the 1 parameter specifies the number of parameters the callback function expects.
