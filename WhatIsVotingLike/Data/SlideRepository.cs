using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WhatIsVotingLike.Models;
using Dapper;

namespace WhatIsVotingLike.Data
{
    public class SlideRepository
    {
        const string _connectionString = "Server = localhost; Database = WhatIsVotingLike; Trusted_Connection = True;";

        public List<Slides> GetAllSlidesForModule(int trainingModuleId)
        {
            using var db = new SqlConnection(_connectionString);

            try
            {    
                var query = @"SELECT *
                            FROM Slides
                            WHERE TrainingModuleId = @tmid";

                var parameters = new { tmid = trainingModuleId };

                var slides = db.Query<Slides>(query, parameters);

                return slides.ToList();
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
                    throw;
            }
        }

        public List<Slides> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var query = db.Query<Slides>("SELECT * FROM Slides");

            return query.ToList();
        }
    }
}
