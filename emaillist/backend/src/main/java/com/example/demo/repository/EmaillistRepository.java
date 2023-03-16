package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.EmaillistVo;

@Repository
public class EmaillistRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmaillistVo> findAll() {
		return sqlSession.selectList("emaillist.findAll");
	}
	
	public List<EmaillistVo> findListWithKeyWord(String keyword) {
		return sqlSession.selectList("emaillist.findListWithKeyWord", keyword);
	}
	
	public Boolean insert(EmaillistVo emaillistVo) {
		return sqlSession.insert("emaillist.insert", emaillistVo) == 1;
	}

	public Boolean delete(Long no) {
		return sqlSession.insert("emaillist.delete", no) == 1;
	}

	
}
