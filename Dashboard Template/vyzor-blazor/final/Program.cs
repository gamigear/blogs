using Vyzor_Blazor.Components;
using Microsoft.AspNetCore.Authentication.Cookies;
using BlazorColorPicker;
using Soenneker.Blazor.TomSelect.Registrars;
using Soenneker.Blazor.FilePond.Registrars;
using CurrieTechnologies.Razor.SweetAlert2;

namespace Vyzor_Blazor
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddRazorComponents().AddInteractiveServerComponents().AddCircuitOptions(options => 
            {
                options.DetailedErrors = true;
            });
            builder.Services.AddColorPicker();
            builder.Services.AddSingleton<AppState>();
            builder.Services.AddScoped<StateService>();
            builder.Services.AddScoped<IActionService, ActionService>();
            builder.Services.AddWMBOS();
            builder.Services.AddWMBSC();
            builder.Services.AddSweetAlert2();
            builder.Services.AddFilePondInteropAsScoped();
            builder.Services.AddTomSelectInteropAsScoped();
            builder.Services.AddScoped<MenuDataService>();
            builder.Services.AddScoped<NavScrollService>();
            builder.Services.AddSession();
            builder.Services.AddScoped<SessionService>();
            builder.Services.AddScoped<LandingMenuDataService>();
            builder.Services.AddScoped<ScriptLoaderService>();
            builder.Services.AddHttpContextAccessor();    
            builder.Services.AddDistributedMemoryCache();  
            builder.Services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30); // Adjust timeout as needed
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseSession();

            app.UseAntiforgery();

            app.MapStaticAssets();

            app.MapRazorComponents<App>().AddInteractiveServerRenderMode();

            app.Run();
        }
    }
}
