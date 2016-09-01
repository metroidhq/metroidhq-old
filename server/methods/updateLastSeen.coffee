Meteor.methods updateLastSeen: ->

    # Update Last Seen
    Meteor.users.update
            _id: @userId
        ,
            $set: 
                lastSeen: new Date()