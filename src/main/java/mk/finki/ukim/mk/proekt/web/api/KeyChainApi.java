package mk.finki.ukim.mk.proekt.web.api;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import mk.finki.ukim.mk.proekt.service.KeyChainService;
import mk.finki.ukim.mk.proekt.service.KeyService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/keyChains")
public class KeyChainApi {

    private final KeyChainService service;
    public KeyChainApi(KeyChainService service)
    {
        this.service = service;
    }

    @GetMapping
    public List<KeyChain> getAllKeyChains(){
        return service.getAllKeyChains();
    }

    @GetMapping("/{id}")
    public Optional<KeyChain> getKeyChain(@PathVariable String id){
        return service.getKeyChain(id);
    }

    @DeleteMapping("/{id}")
    public void deleteKeyChain(@PathVariable String id){
        service.deleteKeyChain(id);
    }

    @GetMapping(params = "price")
    public List<KeyChain> searchByPrice(@RequestParam int price)
    {
        return service.searchKeyChains(price);
    }

    @GetMapping(params = "onStock")
    public List<KeyChain> searchOnStock(@RequestParam boolean onStock)
    {
        return service.searchOnStockKeyChains(onStock);
    }

}

