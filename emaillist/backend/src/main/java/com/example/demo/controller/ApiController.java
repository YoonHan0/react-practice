package com.example.demo.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.EmaillistRepository;
import com.example.demo.vo.EmaillistVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private EmaillistRepository EmaillistRepository;

	@GetMapping("/emaillist")
	public ResponseEntity<JsonResult> readCard() {
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(EmaillistRepository.findAll()));
	}
	
	@GetMapping("/emaillist/{keyword}")
	public ResponseEntity<JsonResult> readCardWithKeyWord(@PathVariable("keyword") String keyword) {
		// System.out.println("키워드 넘어왔다~" + keyword);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(EmaillistRepository.findListWithKeyWord(keyword)));
	}

	@PostMapping("/add")
	public ResponseEntity<JsonResult> createEmail(@RequestBody EmaillistVo emaillistVo) {
		// System.out.println("추가추가추가추가추");
		EmaillistRepository.insert(emaillistVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistVo));
	}
	@DeleteMapping("/delete/{no}")
	public ResponseEntity<JsonResult> deleteEmail(@PathVariable("no") Long no) {
		// System.out.println("삭제삭제");
		EmaillistRepository.delete(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}
