using Gifter.Models;

namespace Gifter.Reposititories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile user);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        UserProfile GetUserProfileByIdWithPosts(int id);
        void Update(UserProfile user);

    }
}