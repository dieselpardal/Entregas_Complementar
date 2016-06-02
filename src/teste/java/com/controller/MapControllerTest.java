package java.com.controller;

import com.controller.MapController;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class MapControllerTest {

    @Test
    public void shoulViewindicateView() throws Exception {
        assertThat(MapController.class.desiredAssertionStatus(), is(true));
    }
}
