using ConsultarCepAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace ConsultarCepAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsultaCep : ControllerBase
    {
      
      [HttpGet]
      public async Task<IActionResult> ConsultarAsync([FromQuery] string txCep)
      {

          var baseUrl = "https://viacep.com.br/ws/";
          string requestUrl = txCep + "/json";

          var client = new HttpClient { BaseAddress = new Uri(baseUrl) };

          var json = await client.GetStreamAsync(requestUrl);
          Endereco endereco = await JsonSerializer.DeserializeAsync<Endereco>(json);

          return Ok(endereco);
      }
    }
}
