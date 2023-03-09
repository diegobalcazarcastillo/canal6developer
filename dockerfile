FROM mcr.microsoft.com/dotnet/sdk:5.0 
WORKDIR /src 
COPY . . 
WORKDIR /src/API 
RUN dotnet dev-certs https 
RUN dotnet user-secrets set "TokenKey" "Secret_that_must_not_be_hard_coded" 
RUN dotnet publish -o /localnet 
CMD ["dotnet","/localnet/API.dll"] 