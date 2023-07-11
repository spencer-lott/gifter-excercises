using System;
using Microsoft.AspNetCore.Mvc;
using Gifter.Repositories;
using Gifter.Models;
using Microsoft.Extensions.Hosting;
using Gifter.Reposititories;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userRepository;

        public UserProfileController(IUserProfileRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userRepository.GetAll());
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id) 
        {
            var user = _userRepository.GetById(id);
            if (user == null) 
            {
                return NotFound();
            }
            return Ok(user);
        }
        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            _userRepository.Add(userProfile);
            return CreatedAtAction("Get", new { id = userProfile.Id });
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile userProfile) 
        {
            if (id != userProfile.Id)
            {
                return BadRequest();
            }

            _userRepository.Update(userProfile);
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) 
        {
            _userRepository.Delete(id);
            return Ok();
        }

        [HttpGet("GetProfileWithPosts/{id}")]
        public IActionResult GetUserProfileByIdWithPosts(int id)
        {
            var user = _userRepository.GetUserProfileByIdWithPosts(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }


    }
}
