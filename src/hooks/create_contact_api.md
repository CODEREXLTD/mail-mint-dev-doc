# Contact API In Mail Mint

<Badge type="tip" vertical="top" text="Mail Mint Core" /> <Badge type="warning" vertical="top" text="Basic" />


In Mail Mint, it’s possible for you to add unlimited contacts. And also you can add them in different lists and tags. The following section contains a list of the topics currently covered by this documentation.


## Adding/Modifying Contacts

MailMint has the following PHP API functions so you can easily add/modify contacts.

### Create/Update Single Contact
Following is the PHP API function for creating or updating a single contact

```
$args = [
  'email'      => 'steve@smith.com', // required
  'first_name' => 'Steve',
  'last_name'  => 'Smith',
  'status'     => 'pending',         // subscribed/pending/unsubscribed
  'lists'      => [ 1, 2, 3 ],       // list ids as an array
  'tags'       => [ 4, 5 ],          // tag ids as an array
  'meta_fields' => [
     'country' => 'United States (US)',
     'phone_number' => '+14844731014    '
  ]
];

// creates single contacts
$contact_id = mailmint_create_single_contact( $args );
```


### Create/Update Multiple Contacts
Following is the PHP API function for creating or updating multiple contacts

```
$args = [
  [
     'email'      => 'steve@smith.com', // required
     'first_name' => 'Steve',
     'last_name'  => 'Smith',
     'status'     => 'pending',         // subscribed/pending/unsubscribed
     'lists'      => [ 1, 2, 3 ],       // list ids as an array
     'tags'       => [ 4, 5 ],          // tag ids as an array
     'meta_fields' => [
        'country' => 'United States (US)',
        'phone_number' => '+14844731014    '
     ]
  ],
  [
     'email'      => 'Williams@smith.com', // required
     'first_name' => 'Williams',
     'last_name'  => 'Smith',
     'status'     => 'pending',         // subscribed/pending/unsubscribed
     'lists'      => [ 1, 2, 3 ],       // list ids as an array
     'tags'       => [ 4, 5 ],          // tag ids as an array
     'meta_fields' => [
        'country' => 'United States (US)',
        'phone_number' => '+14843751014    '
     ]
  ]
];

// creates multiple contacts
mailmint_create_multiple_contacts( $args );
```

### Create/Update a single list/tag 
Following is the PHP API function if you want to create or update a single list/tag 


```
$type = 'lists'; // type can be lists or tags

$args = [
  'title' => 'Beta Testers',              // required
  'data' => 'Beta testers of Mail Mint'   // Description of the group
];

// creates a single contact group [lists/tags]
$group_id = mailmint_create_single_contact_group( $type, $args );
```

### Create/Update  multiple list/tag
Following is the PHP API function if you want to create or update multiple lists/tags

```
$type = 'tags'; // type can be lists or tags

$args = [
  [
     'title' => 'Early Adopters',              // required
     'data' => 'Early adopters of Mail Mint'   // Description of the group
  ],
  [
     'title' => 'Beta Testers',              // required
     'data' => 'Beta testers of Mail Mint'   // Description of the group
  ]
  ];


// creates a multiple contact groups [lists/tags]
mailmint_create_multiple_contact_groups( $type, $args );
```



### Create/Update  multiple list/tag to a Specific Contact
Following is the PHP API function if you want to create or update multiple lists/tags to a Specific Contact

```
$type = 'lists';    // type can be lists or tags
$args = [ 96, 97 ]; // valid group ids [list/tag ids]
$contact_id = 29;   // a valid contact id

// assign group ids  [lists/tags] to a specific contact
mailmint_add_contact_to_groups( $type, $args, $contact_id );
```