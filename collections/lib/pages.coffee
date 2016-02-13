@Pages = new Mongo.Collection 'pages'
Pages.attachSchema new SimpleSchema
    slug:
        type: String
        label: 'Slug'

    title:
        type: String
        label: 'Title'

    template:
        type: String
        label: 'Template'

    comments:
        type: Boolean
        label: 'Comments'
        defaultValue: false

    access:
        type: String
        label: 'Access'
        defaultValue: 'public'
        allowedValues: [
            'public'
        ]