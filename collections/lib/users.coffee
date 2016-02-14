Schema.UserProfile = new SimpleSchema
    firstName:
        type: String
        label: 'First Name'
        optional: true

    lastName:
        type: String
        label: 'Last Name'
        optional: true

    displayName:
        type: String
        label: 'Display Name'
        allowedValues: [
            'firstLast'
            'first'
            'firstLastInit'
            'firstInitLast'
            'firstInitLastInit'
            'username'
            'firstUsernameLast'
        ]

    title:
        type: String
        label: 'Title'
        optional: true

    bio:
        type: String
        label: 'Bio'
        optional: true

    birthday:
        type: Date
        label: 'Birthday'
        optional: true

    birthdayDisplay:
        type: Boolean
        label: 'Birthday Display'
        defaultValue: false

    websiteName:
        type: String
        label: 'Website Name'
        optional: true

    websiteUrl:
        type: String
        label: 'Website URL'
        regEx: SimpleSchema.RegEx.Url
        optional: true

    posts:
        type: Number
        label: 'Posts'

    gravatar:
        type: Boolean
        label: 'Gravatar'
        defaultValue: true

    avatar:
        type: String
        label: 'Avatar'
        optional: true

    signature:
        type: String
        label: 'Signature'
        optional: true

    lastSeen:
        type: Date
        label: 'Last Seen'
        defaultValue: new Date()

    timeZone:
        type: Number
        label: 'Time Zone'
        optional: true


Meteor.users.attachSchema new SimpleSchema
    username:
        type: String
        label: 'Username'

    emails:
        type: Array
        label: 'Emails'

    'emails.$':
        type: Object
        label: 'Emails Object'

    'emails.$.address':
        type: String
        label: 'Email Address'
        regEx: SimpleSchema.RegEx.Email

    'emails.$.verified':
        type: Boolean
        label: 'Email Verified'
        defaultValue: false

    'emails.$.primary':
        type: Boolean
        label: 'Primary Email'
        defaultValue: false

    profile:
        type: Schema.UserProfile
        label: 'Profile'

    createdAt:
        type: Date
        label: 'Created At'
        defaultValue: new Date()

    services:
        type: Object
        label: 'Services (Required for Password)'
        optional: true
        blackbox: true

    roles:
        type: Object
        label: 'Roles (Required for Admin)'
        optional: true
        blackbox: true

    heartbeat:
        type: Date
        label: 'Heartbeat (Required for Meteor)'
        optional: true