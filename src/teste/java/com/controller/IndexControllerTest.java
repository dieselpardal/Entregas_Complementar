package java.com.controller;

import com.controller.IndexController;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class IndexControllerTest {

    @Test
    public void shoulRunIndexTest() throws Exception {
        IndexController indexControler = new IndexController();
        String step = indexControler.index();
        assertThat(step, is("index"));

    }


}
