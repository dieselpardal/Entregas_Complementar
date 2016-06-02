package java.com.service;

import com.service.MapLoader;
import org.json.simple.JSONObject;
import org.junit.Test;

import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertFalse;

public class MapLoaderTest {

    @Test
    public void shoulLoadJsonNotEmpty() throws Exception {
        MapLoader mapLoader = new MapLoader();
        JSONObject list = mapLoader.loadJson();
        assertFalse(list.isEmpty());
    }

    @Test
    public void shoulLoadJsonTolistCLientNotEmpty() throws Exception {
        MapLoader mapLoader = new MapLoader();
        List<Object> list = mapLoader.mapListClient();
        assertFalse(list.isEmpty());
    }

    @Test
    public void shoulLoadJsonTolistCLient() throws Exception {
        MapLoader mapLoader = new MapLoader();
        List<Object> list = mapLoader.mapListClient();
        Class<?> temp = list.get(0).getClass();
        assertThat(temp.getSimpleName().equals("Client"), is(true));
    }

    @Test
    public void shoulLoadJsonTolistJoin() throws Exception {
        MapLoader mapLoader = new MapLoader();
        List<Object> list = mapLoader.mapListJoin();
        Class<?> temp = list.get(0).getClass();
        //System.out.print(temp.getSimpleName());
        assertThat(temp.getSimpleName().equals("Join"), is(true));
    }

}
