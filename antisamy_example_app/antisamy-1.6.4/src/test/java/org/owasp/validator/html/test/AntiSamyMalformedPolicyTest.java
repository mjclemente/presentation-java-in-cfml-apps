package org.owasp.validator.html.test;

import static org.junit.Assert.fail;

import java.io.InputStream;

import org.junit.Test;
import org.owasp.validator.html.Policy;
import org.owasp.validator.html.PolicyException;

/**
 * @author Gerardo Canedo
 */
public class AntiSamyMalformedPolicyTest {

    @Test
    public void testDirectConfigMalformedValidationOn() throws Exception {
        Policy.setSchemaValidation(false);
        InputStream stream = AntiSamyMalformedPolicyTest.class.getResourceAsStream("/invalidPolicyMalformedXml.xml");
        try {
            Policy.getInstance(stream);
            fail("For Malformed XML, PolicyException expected whether schema validation is enabled or not.");
        } catch (PolicyException e) {
			// This is expected, so do nothing. Any other kind of exception is a failed test case.
        }
    }

    @Test
    public void testDirectConfigMalformedValidationOff() throws Exception {
        Policy.setSchemaValidation(true);
        InputStream stream = AntiSamyMalformedPolicyTest.class.getResourceAsStream("/invalidPolicyMalformedXml.xml");
        try {
            Policy.getInstance(stream);
            fail("For Malformed XML, PolicyException expected whether schema validation is enabled or not.");
        } catch (PolicyException e) {
			// This is expected, so do nothing. Any other kind of exception is a failed test case.
        }
    }
    
	@Test
	public void testDirectConfigAsBaisMalformedValidationOn() throws Exception {
		Policy.setSchemaValidation(true);
		InputStream stream = ESAPIInvalidPolicyTest.class.getResourceAsStream("/invalidPolicyMalformedXml.xml");
		try {
			Policy.getInstance(ESAPIInvalidPolicyTest.toByteArrayStream(stream));
            fail("For Malformed XML, PolicyException expected whether schema validation is enabled or not.");
        } catch (PolicyException e) {
			// This is expected, so do nothing. Any other kind of exception is a failed test case.
		}
	}

	@Test
	public void testDirectConfigAsBaisMalformedValidationOff() throws Exception {
		Policy.setSchemaValidation(false);
		InputStream stream = ESAPIInvalidPolicyTest.class.getResourceAsStream("/invalidPolicyMalformedXml.xml");
		try {
			Policy.getInstance(ESAPIInvalidPolicyTest.toByteArrayStream(stream));
            fail("For Malformed XML, PolicyException expected whether schema validation is enabled or not.");
        } catch (PolicyException e) {
			// This is expected, so do nothing. Any other kind of exception is a failed test case.
		}
	}
}
