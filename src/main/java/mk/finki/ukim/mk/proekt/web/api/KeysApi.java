package mk.finki.ukim.mk.proekt.web.api;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.service.KeyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/keys")
public class KeysApi {

    private final KeyService keyService;
    public KeysApi(KeyService keyService){
        this.keyService = keyService;
    }

    @GetMapping
    public List<Key> getAllKeys(){
        return keyService.getAllKeys();
    }

    @GetMapping("/{id}")
    public Optional<Key> getKey(@PathVariable String id){
        return keyService.getKey(id);
    }

    @PutMapping("/{id}")
    public Key updateKey(@PathVariable String id, @RequestBody Key k){
        return keyService.updateKey(id,k);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Key addKey(@RequestBody Key k){
        return keyService.createKey(k);
    }

    @DeleteMapping("/{id}")
    public void deleteKey(@PathVariable String id){
         keyService.deleteKey(id);
    }

    @GetMapping(params = "price")
    public List<Key> searchByPrice(@RequestParam int price)
    {
        return keyService.searchKeyByPrice(price);
    }

    @GetMapping(params = "size")
    public List<Key> searchBySize(@RequestParam Double size)
    {
        return keyService.searchKeyBySize(size);
    }

    @GetMapping(params = "onStock")
    public List<Key> searchOnStock(@RequestParam boolean onStock)
    {
        return keyService.searchOnStock(onStock);
    }

    @GetMapping(params = {"size","price"})
    public List<Key> searchBySizeAndPrice(@RequestParam (required = false) Double size,
                                          @RequestParam int price)
    {
        return keyService.searchKeyByPriceAndSize(price,size);
    }


}
