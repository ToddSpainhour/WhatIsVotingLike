USE [master]
GO
/****** Object:  Database [WhatIsVotingLike]    Script Date: 1/10/2021 2:50:04 PM ******/
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
/****** Object:  Table [dbo].[Slides]    Script Date: 1/10/2021 2:50:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Slides](
	[TrainingModuleId] [int] NOT NULL,
	[SlideId] [int] IDENTITY(1,1) NOT NULL,
	[SlideOrderPosition] [int] NULL,
	[SlideTitle] [varchar](250) NULL,
	[SlideBodyText] [varchar](1000) NULL,
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
/****** Object:  Table [dbo].[TrainingModules]    Script Date: 1/10/2021 2:50:05 PM ******/
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

INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 3, 1, N'Your Vote Matters.', N'Elections are the cornerstone of democracy, and your vote can help shape the direction of your city, state, and the country as a whole. Your participation is vital in every election, big and small, and some elections have even been decided by only a few votes. Your vote matters.', N'https://media.npr.org/assets/img/2018/11/06/gettyimages-1058143760_wide-985995947e0debc7db2b0bd50abcb93650795049.jpg', N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 4, 2, N'Before We Start...', N'Election laws differ in every state and can change periodically. Once you complete this training, links will be provided to Tennessee''s official election resources, so you can access accurate election information.', N'https://live.staticflickr.com/3922/14432536983_714c528d74_b.jpg', N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 5, 3, N'Register to Vote', N'One of the first steps to voting in Tennessee happens before you ever get to a polling place. You have to be registered to vote at least 30 days before an election.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 6, 4, N'Outside the Polling Place', N'When you get to the right polling location, you may see campaign signs or people supporting specific candidates, but they have to be outside a 100-foot boundary.', N'https://images.unsplash.com/photo-1604443572256-6585931858bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 7, 5, N'Inside the Polling Place', N'Due to the pandemic, you’ll notice some enhancements when you vote in person, like increased social distancing, signage, floor markings, or even plexiglass shields. We encourage all voters to do their part and wear a face covering when voting in person.  Once you make your way inside there may be a line, but stay in it. Anyone in line when polls close will still be allowed to cast their ballot.', N'https://images.unsplash.com/photo-1466780446965-2072a3de8a43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80', N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 8, 6, N'Check In with Poll Workers', N'The next step is to check-in with poll workers where you''ll need to show a valid photo ID.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 9, 7, N'Voting Machine', N'You will then check-in with a machine technician who will escort you to the next available machine, and will make sure you are setup with the correct ballot. Voters should take their time while privately making their selections. You simply select which candidate you’d like to vote for. Once you are finished the machine will show you a confirmation screen.  This is where you should ask a poll worker for help if there is an issue or if there’s something you don’t understand. When you press “VOTE” the final time, the ballot is confirmed and cannot be changed.', N'https://fox17.com/resources/media/06ebb98d-5751-49a6-96f1-e5f50946e287-large16x9_AP18134791459673.jpg?1559204122659', N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 10, 8, N'Don''t Forget your Sticker', N'The last step is getting your “I Voted” sticker, and being proud that you’ve exercised your right as a Tennessean.', N'https://images.unsplash.com/photo-1540908489236-15aac66d9a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
INSERT [dbo].[Slides] ([TrainingModuleId], [SlideId], [SlideOrderPosition], [SlideTitle], [SlideBodyText], [ImageUrl], [Question], [CorrectAnswer], [IncorrectAnswer1], [IncorrectAnswer2], [IncorrectAnswer3], [IsComplete]) VALUES (1, 12, 9, N'Conclusion', N'Vestibulum lorem tellus, blandit et quam non, tincidunt pharetra neque. Fusce eget magna at dolor luctus sollicitudin nec at quam. Fusce nec eros libero. Nullam rutrum luctus porttitor. Integer non erat nec sapien congue placerat.', NULL, N'Here is a question', N'Correct answer!', N'Nope', N'Try again', N'Still wrong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', 0)
SET IDENTITY_INSERT [dbo].[Slides] OFF
SET IDENTITY_INSERT [dbo].[TrainingModules] ON 

INSERT [dbo].[TrainingModules] ([TrainingModuleId], [TraineeId], [Title], [Description], [DateComplete], [IsComplete], [SlidesCompleted]) VALUES (1, NULL, N'What Is Voting In Person Like?', N'Learn more about what to expect when you show up to the polls to cast your ballot.  This training module focuses on voting in person.', NULL, 0, NULL)
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
