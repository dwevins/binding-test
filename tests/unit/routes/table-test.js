import { moduleFor, test } from 'ember-qunit';

moduleFor('route:table', 'Unit | Route | table', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('tables page should be accessible', function (assert) {
  visit('/tables');
  andThen(function() {
    assert.equal(currentURL(), '/tables', 'should be /tables');
  });
});
