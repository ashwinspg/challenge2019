const assert = require('assert');

const processProblem1 = require('../../utils/test/processProblem1');

const partners = require('../../data_store/sample_partners.json');

const input = require('../../test_store/sample_input3.json');
const output = require('../../test_store/sample_output3.json');

it('Sample Test 3', function(done){
    const processedOutput = processProblem1(input, partners);
    assert(JSON.stringify(output) == JSON.stringify(processedOutput));
    done();
});