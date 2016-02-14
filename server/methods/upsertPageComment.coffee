Meteor.methods upsertPageComment: (data) ->
    if data
        user = Meteor.user()

        # If Current User Exists
        if user

            # Get Comment
            comment = PageComments.findOne
                _id: data._id

            # If Inserting and Current User is Author
            if (!data._id && @userId == data.userId) ||

            # If Updating and Current User is Author or Admin
            (data._id &&
            (@userId == comment.userId || (user.roles && user.roles.__global_roles__.indexOf('admin') != -1)))

                # Upsert Comment History
                PageComments.upsert
                        _id: data._id
                    ,
                        $set: data