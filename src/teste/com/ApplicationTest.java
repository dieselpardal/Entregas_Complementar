package com;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class ApplicationTest {

    @Test
    public void shoulRunApplicationTest() throws Exception {
        assertThat(Application.class.desiredAssertionStatus(), is(true));

    }


}
