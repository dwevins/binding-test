import { moduleFor, test } from 'ember-qunit';

moduleFor('route:waiter', 'Unit | Route | waiter', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('waiter page should be accessible', function (assert) {
  visit('/waiter');
  andThen(function() {
    assert.equal(currentURL(), '/waiter', 'should be /waiter');
  });
});
