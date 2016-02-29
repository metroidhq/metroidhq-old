@CommentHistories = new Mongo.Collection 'commentHistories'
CommentHistories.attachSchema new SimpleSchema
    commentId:
        type: String
        label: 'Comment Reference'

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

    archived:
        type: Boolean
        label: 'Archived'