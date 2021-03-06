USE [master]
GO
/****** Object:  Database [WhatIsVotingLike]    Script Date: 12/2/2020 8:11:46 PM ******/
CREATE DATABASE [WhatIsVotingLike]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WhatIsVotingLike', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\WhatIsVotingLike.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'WhatIsVotingLike_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\WhatIsVotingLike_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [WhatIsVotingLike] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WhatIsVotingLike].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WhatIsVotingLike] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET ARITHABORT OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WhatIsVotingLike] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WhatIsVotingLike] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET  DISABLE_BROKER 
GO
ALTER DATABASE [WhatIsVotingLike] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WhatIsVotingLike] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET RECOVERY FULL 
GO
ALTER DATABASE [WhatIsVotingLike] SET  MULTI_USER 
GO
ALTER DATABASE [WhatIsVotingLike] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WhatIsVotingLike] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WhatIsVotingLike] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WhatIsVotingLike] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [WhatIsVotingLike] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'WhatIsVotingLike', N'ON'
GO
ALTER DATABASE [WhatIsVotingLike] SET QUERY_STORE = OFF
GO
USE [WhatIsVotingLike]
GO
/****** Object:  Table [dbo].[Slides]    Script Date: 12/2/2020 8:11:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Slides](
	[TrainingModuleId] [int] NOT NULL,
	[SlideId] [int] IDENTITY(1,1) NOT NULL,
	[SlideOrderPosition] [int] NULL,
	[SlideTitle] [varchar](250) NULL,
	[SlideBodyText] [varchar](500) NULL,
	[ImageUrl] [varchar](1000) NULL,
	[Question] [varchar](500) NULL,
	[CorrectAnswer] [varchar](500) NULL,
	[IncorrectAnswer1] [varchar](500) NULL,
	[IncorrectAnswer2] [varchar](500) NULL,
	[IncorrectAnswer3] [nchar](500) NULL,
	[IsComplete] [bit] NOT NULL,
 CONSTRAINT [PK_Slides] PRIMARY KEY CLUSTERED 
(
	[SlideId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainingModules]    Script Date: 12/2/2020 8:11:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainingModules](
	[TrainingModuleId] [int] IDENTITY(1,1) NOT NULL,
	[TraineeId] [int] NULL,
	[Title] [varchar](250) NOT NULL,
	[Description] [varchar](1000) NOT NULL,
	[DateComplete] [datetime] NULL,
	[IsComplete] [bit] NOT NULL,
	[SlidesCompleted] [int] NULL,
 CONSTRAINT [PK_TrainingModules] PRIMARY KEY CLUSTERED 
(
	[TrainingModuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Slides] ON 

INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 3, 1, N'Intro Title Text', N'Phasellus nulla arcu, tincidunt vitae volutpat a, tempus non neque. Aenean a maximus orci, eu gravida risus. Nulla aliquam, nisi eget ultrices fringilla.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 4, 2, N'Disclaimer Title Text', N'Nunc fringilla accumsan libero at consectetur. Quisque ut dui vitae nunc tempor consectetur quis fermentum lectus. Praesent ultrices, tellus ac venenatis tincidunt, lectus mauris vestibulum quam, et iaculis justo tellus.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 5, 3, N'Register Title Text', N' Quisque ut dui vitae nunc tempor consectetur quis fermentum lectus. Praesent ultrices, et iaculis justo tellus.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 6, 4, N'Outside the Polling Place', N' Quisque ut dui vitae nunc tempor consectetur quis fermentum lectus. Praesent ultrices, et iaculis justo tellus.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 7, 5, N'Inside the Polling Place', N' Quisque ut dui vitae nunc tempor consectetur quis fermentum lectus. Praesent ultrices, et iaculis justo tellus.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 8, 6, N'Check In with Poll Workers', N' Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 9, 7, N'Voting Machine', N' Blandit purus non odio feugiat aliquet. Nunc ultrices neque dolor, sed egestas augue elementum non. Etiam viverra eros eget sapien scelerisque placerat. Vivamus et orci turpis. Donec vitae hendrerit.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 10, 8, N'Don''t Forget your Sticker', N'Est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 12, 9, N'Conclusion', N'Vestibulum lorem tellus, blandit et quam non, tincidunt pharetra neque. Fusce eget magna at dolor luctus sollicitudin nec at quam. Fusce nec eros libero. Nullam rutrum luctus porttitor. Integer non erat nec sapien congue placerat.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
SET IDENTITY_INSERT [dbo].[Slides] OFF
SET IDENTITY_INSERT [dbo].[TrainingModules] ON 

INSERT [dbo].[TrainingModules] ([TrainingModuleId], [TraineeId], [Title], [Description], [DateComplete], [IsComplete], [SlidesCompleted]) VALUES (1, NULL, N'What Is Voting Like?', N'Learn more about what to expect when you show up to the poll to cast your ballot', NULL, 0, NULL)
SET IDENTITY_INSERT [dbo].[TrainingModules] OFF
ALTER TABLE [dbo].[Slides]  WITH CHECK ADD  CONSTRAINT [FK_Slides_TrainingModules] FOREIGN KEY([TrainingModuleId])
REFERENCES [dbo].[TrainingModules] ([TrainingModuleId])
GO
ALTER TABLE [dbo].[Slides] CHECK CONSTRAINT [FK_Slides_TrainingModules]
GO
USE [master]
GO
ALTER DATABASE [WhatIsVotingLike] SET  READ_WRITE 
GO
