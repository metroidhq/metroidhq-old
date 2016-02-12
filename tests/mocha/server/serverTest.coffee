if !(typeof MochaWeb == 'undefined')
  MochaWeb.testOnly ->
    describe 'server initialization', ->
      it 'should have a Meteor version defined', ->
        chai.assert Meteor.release