package contactapp.contact.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import contactapp.contact.Model.User;
import contactapp.contact.Repository.UserRepository;


@RestController
@RequestMapping("/contact/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAll() {
        return userRepository.findAll();
    }
    @PostMapping
    public User create(@RequestBody User user) {
        return userRepository.save(user);
    }
    @GetMapping("/{id}")
    public User getOne(@PathVariable String id) {
        return userRepository.findById(id).orElse(null);
    }

    @PutMapping(("/{id}"))
    public User update(@PathVariable String id, @RequestBody User userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            user.setNumber(userDetails.getNumber());
            return userRepository.save(user);
        }).orElseGet(() -> {
            userDetails.setId(id);
            return userRepository.save(userDetails);
        });
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        userRepository.deleteById(id);
    }

    @GetMapping("/search/{keyword}")
    public List<User> search(@PathVariable String keyword) {
        List<User> byName = userRepository.findByNameContainingIgnoreCase(keyword);
        List<User> byEmail = userRepository.findByEmailContainingIgnoreCase(keyword);
        List<User> byNumber = userRepository.findByNumberContaining(keyword);

        byName.addAll(byEmail);
        byName.addAll(byNumber);

        return byName.stream().distinct().toList();
    }
    
}