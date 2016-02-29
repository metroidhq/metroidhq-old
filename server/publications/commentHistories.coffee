Meteor.publish 'commentHistories', (commentId) ->

    # Get Current User
    user = Meteor.users.findOne
        _id: @userId

    # If Current User Exists and is Admin
    if user && user.roles && user.roles.__global_roles__.indexOf('admin') != -1

        # Publish All Pages
        CommentHistories.find
            _id: commentId

    else

        # Publish Nothing
        []