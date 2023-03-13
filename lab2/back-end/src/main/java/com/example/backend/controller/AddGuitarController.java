package com.example.backend.controller;

import com.example.backend.entity.GuitarEntity;
import com.example.backend.repositroy.GuitarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.util.List;

@Controller
public class AddGuitarController {
    @Autowired
    private GuitarRepository guitarRepository;

    @GetMapping("/new")
    public String addNew(GuitarEntity guitar) {
        return "add-guitar";
    }

    @PostMapping("/add-guitar")
    public String addGuitar(@Valid GuitarEntity guitar, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "add-guitar";
        }
        List<GuitarEntity> guitarList = guitarRepository.findAll();
        guitar.id = guitarList.size()+1;
        guitarRepository.save(guitar);
        model.addAttribute("customers", guitarRepository.findAll());

        List<GuitarEntity> updatedGuitarList = guitarRepository.findAll();
        model.addAttribute("guitarList", updatedGuitarList);
        return "index";
    }

    @GetMapping("/create-full-db")
    public String createDB(Model model){
        guitarRepository.save(new GuitarEntity(
                1,
                "Gibson Les Paul",
                "https://guitar.com/wp-content/uploads/2018/10/Gibson-les-paul-modern-hero@1400x1050.jpg",
                "Gibson Les Paul 1968 custom",
                1269
        ));
        guitarRepository.save(new GuitarEntity(
                2,
                "Fender Stratocaster",
                "http://cdn.ecommercedns.uk/files/6/248156/8/22320548/1958-fender-stratocaster-6.jpg",
                "Fender Stratocaster 1965",
                1119
        ));
        guitarRepository.save(new GuitarEntity(
                3,
                "Gibson SG",
                "https://cdn.ecommercedns.uk/files/6/248156/0/18023880/1964-gibson-sg-standard-5.jpg",
                "Gibson SG 1981",
                1179
        ));
        guitarRepository.save(new GuitarEntity(
                4,
                "Gibson Double Neck SG",
                "https://guitar.com/wp-content/uploads/2020/01/Scott-Holiday-Gibson-EDS-1275-doubleneck-145@1400x1050.jpg",
                "Gibson Double Neck 1973",
                3790
        ));
        guitarRepository.save(new GuitarEntity(
                5,
                "Fender Telecaster",
                "https://ae01.alicdn.com/kf/Hd0f3a0a9149d4a6d80b145fee826c58eR/39-Inch-Full-Solid-Basswood-Body-Butterscotch-Color-Telecaster-Electric-Guitar-6-String-TL-Electric-Guitar.jpg",
                "Fender Telecaster 2001",
                1390
        ));
        guitarRepository.save(new GuitarEntity(
                6,
                "Gibson Explorer 2005",
                "https://i.pinimg.com/originals/97/6e/5c/976e5c0a8423f1f76cb6203e846eb51a.jpg",
                "Gibson Explorer 2005",
                2190
        ));
        guitarRepository.save(new GuitarEntity(
                7,
                "Gibson 1939 J-55",
                "https://images.reverb.com/image/upload/s--ti9lUqs7--/f_auto,t_large/v1662097281/fph70fguwd6xmzlaio9g.jpg",
                "Gibson J-55 1939",
                4700
        ));
        guitarRepository.save(new GuitarEntity(
                8,
                "Yamaha A5R",
                "https://images.reverb.com/image/upload/s--l7CkhgwJ--/c_crop,h_1.000,w_0.563,x_0.241,y_0.000/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1528830880/zn9itmgqfmh98fb6izbf.jpg",
                "Yamaha A5R 2010",
                1329
        ));


        List<GuitarEntity> guitarList = guitarRepository.findAll();
        model.addAttribute("guitarList", guitarList);

        return "index";
    }
}
