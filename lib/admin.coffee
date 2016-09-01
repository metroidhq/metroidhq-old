@AdminConfig =
    name: 'Metroid HQ Admin'
    skin: 'green'

    collections:
        Pages:
            icon: 'file'
            label: 'Pages'
            tableColumns: [
                    label: 'Title'
                    name: 'title'
                ,
                    label: 'Slug'
                    name: 'slug'
                ,
                    label: 'Template'
                    name: 'template'
                ,
                    label: 'Comments'
                    name: 'comments'
                ,
                    label: 'Access'
                    name: 'access'
                ,
                    label: 'ID'
                    name: '_id'
            ]

        PageMeta:
            icon: 'code'
            label: 'Page Meta'
            tableColumns: [
                    label: 'Page ID'
                    name: 'pageId'
                ,
                    label: 'Key'
                    name: 'key'
                ,
                    label: 'Value'
                    name: 'value'
                ,
                    label: 'ID'
                    name: '_id'
            ]

        PageComments:
            icon: 'comment'
            label: 'Page Comments'
            tableColumns: [
                    label: 'Page ID'
                    name: 'pageId'
                ,
                    label: 'User ID'
                    name: 'userId'
                ,
                    label: 'Content'
                    name: 'content'
                ,
                    label: 'Created At'
                    name: 'createdAt'
                ,
                    label: 'Modified At'
                    name: 'modifiedAt'
                ,
                    label: 'Archived'
                    name: 'archived'
                ,
                    label: 'ID'
                    name: '_id'
            ]

        CommentHistories:
            icon: 'comment'
            label: 'Comment Histories'
            tableColumns: [
                    label: 'Comment ID'
                    name: 'commentId'
                ,
                    label: 'User ID'
                    name: 'userId'
                ,
                    label: 'Content'
                    name: 'content'
                ,
                    label: 'Created At'
                    name: 'createdAt'
                ,
                    label: 'Archived'
                    name: 'archived'
                ,
                    label: 'ID'
                    name: '_id'
            ]