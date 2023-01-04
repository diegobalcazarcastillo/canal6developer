using Domain;

/*Interfaz para JsonWebToken*/
namespace Application.Interface
{
    public interface IJWtGenerator
    {
        string CreateToken(AppUser user);
    }
}