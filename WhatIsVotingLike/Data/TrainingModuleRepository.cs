using System;
using System.Collections.Generic;
using System.Linq;
using WhatIsVotingLike.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace WhatIsVotingLike.Data
{
    public class TrainingModuleRepository
    {

        const string _connectionString = "Server = localhost; Database = WhatIsVotingLike; Trusted_Connection = True;";


        public List<TrainingModules> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            try
            {
                var trainingModules = db.Query<TrainingModules>("SELECT * FROM TrainingModules");

                return trainingModules.ToList();
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

    }
}
