package com.dom;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author dom
 * @summary Description of this class
 * @Copyright (c) 2018, Lianjia Group All Rights Reserved.
 */
@Controller
public class HomeController {

    @RequestMapping("/home")
    public String home() {
        return "home";
    }
}
