@PageComments = new Mongo.Collection 'pageComments'
PageComments.attachSchema new SimpleSchema
    pageId:
        type: String
        label: 'Page Reference'

    userId:
        type: String
        label: 'User Reference'

    content:
        type: String
        label: 'Content'

    createdAt:
        type: Date
        label: 'Created At'
        defaultValue: new Date()

    modifiedAt:
        type: Date
        label: 'Modified At'
        defaultValue: new Date()

    archived:
        type: Boolean
        label: 'Archived'
        defaultValue: false