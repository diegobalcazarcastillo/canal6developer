using FluentValidation;
/*Mis validaciones de FluentValidation */
namespace Application.Validators
{
    public static class ValidatorExtension
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder <T, string> ruleBuilder)
        {
            var options = ruleBuilder
            .NotEmpty()
            .MinimumLength(6)
            .WithMessage("El password debe de ser de al menos 6 caracteres")
            .Matches("[A-Z]").WithMessage("Password must contain 1 upper case letter")
            .Matches("[a-z]").WithMessage("Password must contain at least one lower case character")
            .Matches("[0-9]").WithMessage("Password must contain a number")
            .Matches("[^a-zA-Z-0-9]").WithMessage("Password must contain a non alphanumeric");
            return options;
        }
    }
}