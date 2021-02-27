using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace server.Models
{
    public partial class PostgresContext : DbContext
    {
        public PostgresContext()
        {
        }

        public PostgresContext(DbContextOptions<PostgresContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EventInvocationLog> EventInvocationLogs { get; set; }
        public virtual DbSet<EventLog> EventLogs { get; set; }
        public virtual DbSet<EventTrigger> EventTriggers { get; set; }
        public virtual DbSet<HdbAction> HdbActions { get; set; }
        public virtual DbSet<HdbActionLog> HdbActionLogs { get; set; }
        public virtual DbSet<HdbActionPermission> HdbActionPermissions { get; set; }
        public virtual DbSet<HdbAllowlist> HdbAllowlists { get; set; }
        public virtual DbSet<HdbCheckConstraint> HdbCheckConstraints { get; set; }
        public virtual DbSet<HdbComputedField> HdbComputedFields { get; set; }
        public virtual DbSet<HdbComputedFieldFunction> HdbComputedFieldFunctions { get; set; }
        public virtual DbSet<HdbCronEvent> HdbCronEvents { get; set; }
        public virtual DbSet<HdbCronEventInvocationLog> HdbCronEventInvocationLogs { get; set; }
        public virtual DbSet<HdbCronEventsStat> HdbCronEventsStats { get; set; }
        public virtual DbSet<HdbCronTrigger> HdbCronTriggers { get; set; }
        public virtual DbSet<HdbCustomType> HdbCustomTypes { get; set; }
        public virtual DbSet<HdbForeignKeyConstraint> HdbForeignKeyConstraints { get; set; }
        public virtual DbSet<HdbFunction> HdbFunctions { get; set; }
        public virtual DbSet<HdbFunctionAgg> HdbFunctionAggs { get; set; }
        public virtual DbSet<HdbFunctionInfoAgg> HdbFunctionInfoAggs { get; set; }
        public virtual DbSet<HdbPermissionAgg> HdbPermissionAggs { get; set; }
        public virtual DbSet<HdbPrimaryKey> HdbPrimaryKeys { get; set; }
        public virtual DbSet<HdbQueryCollection> HdbQueryCollections { get; set; }
        public virtual DbSet<HdbRole> HdbRoles { get; set; }
        public virtual DbSet<HdbScheduledEvent> HdbScheduledEvents { get; set; }
        public virtual DbSet<HdbScheduledEventInvocationLog> HdbScheduledEventInvocationLogs { get; set; }
        public virtual DbSet<HdbSchemaUpdateEvent> HdbSchemaUpdateEvents { get; set; }
        public virtual DbSet<HdbTableInfoAgg> HdbTableInfoAggs { get; set; }
        public virtual DbSet<HdbUniqueConstraint> HdbUniqueConstraints { get; set; }
        public virtual DbSet<HdbVersion> HdbVersions { get; set; }
        public virtual DbSet<List> Lists { get; set; }
        public virtual DbSet<ListItem> ListItems { get; set; }
        public virtual DbSet<MigrationSetting> MigrationSettings { get; set; }
        public virtual DbSet<Planner> Planners { get; set; }
        public virtual DbSet<Recipe> Recipes { get; set; }
        public virtual DbSet<RecipeIngredient> RecipeIngredients { get; set; }
        public virtual DbSet<RemoteSchema> RemoteSchemas { get; set; }
        public virtual DbSet<SchemaMigration> SchemaMigrations { get; set; }
        public virtual DbSet<User> Users { get; set; }

        // Unable to generate entity type for table 'hdb_catalog.hdb_table' since its primary key could not be scaffolded. Please see the warning messages.
        // Unable to generate entity type for table 'hdb_catalog.hdb_relationship' since its primary key could not be scaffolded. Please see the warning messages.
        // Unable to generate entity type for table 'hdb_catalog.hdb_permission' since its primary key could not be scaffolded. Please see the warning messages.
        // Unable to generate entity type for table 'hdb_catalog.hdb_remote_relationship' since its primary key could not be scaffolded. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("Host=172.18.0.3;Port=5432;Database=postgres;Username=postgres;Password=postgrespassword");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasPostgresExtension("pgcrypto")
                .HasAnnotation("Relational:Collation", "en_US.utf8");

            modelBuilder.Entity<EventInvocationLog>(entity =>
            {
                entity.ToTable("event_invocation_logs", "hdb_catalog");

                entity.HasIndex(e => e.EventId, "event_invocation_logs_event_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.EventId).HasColumnName("event_id");

                entity.Property(e => e.Request)
                    .HasColumnType("json")
                    .HasColumnName("request");

                entity.Property(e => e.Response)
                    .HasColumnType("json")
                    .HasColumnName("response");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.EventInvocationLogs)
                    .HasForeignKey(d => d.EventId)
                    .HasConstraintName("event_invocation_logs_event_id_fkey");
            });

            modelBuilder.Entity<EventLog>(entity =>
            {
                entity.ToTable("event_log", "hdb_catalog");

                entity.HasIndex(e => e.CreatedAt, "event_log_created_at_idx");

                entity.HasIndex(e => e.Delivered, "event_log_delivered_idx");

                entity.HasIndex(e => e.Locked, "event_log_locked_idx");

                entity.HasIndex(e => e.TriggerName, "event_log_trigger_name_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.Archived).HasColumnName("archived");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Delivered).HasColumnName("delivered");

                entity.Property(e => e.Error).HasColumnName("error");

                entity.Property(e => e.Locked).HasColumnName("locked");

                entity.Property(e => e.NextRetryAt).HasColumnName("next_retry_at");

                entity.Property(e => e.Payload)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("payload");

                entity.Property(e => e.SchemaName)
                    .IsRequired()
                    .HasColumnName("schema_name");

                entity.Property(e => e.TableName)
                    .IsRequired()
                    .HasColumnName("table_name");

                entity.Property(e => e.Tries).HasColumnName("tries");

                entity.Property(e => e.TriggerName)
                    .IsRequired()
                    .HasColumnName("trigger_name");
            });

            modelBuilder.Entity<EventTrigger>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("event_triggers_pkey");

                entity.ToTable("event_triggers", "hdb_catalog");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.Configuration)
                    .HasColumnType("json")
                    .HasColumnName("configuration");

                entity.Property(e => e.SchemaName)
                    .IsRequired()
                    .HasColumnName("schema_name");

                entity.Property(e => e.TableName)
                    .IsRequired()
                    .HasColumnName("table_name");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasColumnName("type");
            });

            modelBuilder.Entity<HdbAction>(entity =>
            {
                entity.HasKey(e => e.ActionName)
                    .HasName("hdb_action_pkey");

                entity.ToTable("hdb_action", "hdb_catalog");

                entity.Property(e => e.ActionName).HasColumnName("action_name");

                entity.Property(e => e.ActionDefn)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("action_defn");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.IsSystemDefined)
                    .HasColumnName("is_system_defined")
                    .HasDefaultValueSql("false");
            });

            modelBuilder.Entity<HdbActionLog>(entity =>
            {
                entity.ToTable("hdb_action_log", "hdb_catalog");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.ActionName).HasColumnName("action_name");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Errors)
                    .HasColumnType("jsonb")
                    .HasColumnName("errors");

                entity.Property(e => e.InputPayload)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("input_payload");

                entity.Property(e => e.RequestHeaders)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("request_headers");

                entity.Property(e => e.ResponsePayload)
                    .HasColumnType("jsonb")
                    .HasColumnName("response_payload");

                entity.Property(e => e.ResponseReceivedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("response_received_at");

                entity.Property(e => e.SessionVariables)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("session_variables");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status");
            });

            modelBuilder.Entity<HdbActionPermission>(entity =>
            {
                entity.HasKey(e => new { e.ActionName, e.RoleName })
                    .HasName("hdb_action_permission_pkey");

                entity.ToTable("hdb_action_permission", "hdb_catalog");

                entity.Property(e => e.ActionName).HasColumnName("action_name");

                entity.Property(e => e.RoleName).HasColumnName("role_name");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.Definition)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("definition")
                    .HasDefaultValueSql("'{}'::jsonb");

                entity.HasOne(d => d.ActionNameNavigation)
                    .WithMany(p => p.HdbActionPermissions)
                    .HasForeignKey(d => d.ActionName)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("hdb_action_permission_action_name_fkey");
            });

            modelBuilder.Entity<HdbAllowlist>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_allowlist", "hdb_catalog");

                entity.HasIndex(e => e.CollectionName, "hdb_allowlist_collection_name_key")
                    .IsUnique();

                entity.Property(e => e.CollectionName).HasColumnName("collection_name");

                entity.HasOne(d => d.CollectionNameNavigation)
                    .WithOne()
                    .HasForeignKey<HdbAllowlist>(d => d.CollectionName)
                    .HasConstraintName("hdb_allowlist_collection_name_fkey");
            });

            modelBuilder.Entity<HdbCheckConstraint>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_check_constraint", "hdb_catalog");

                entity.Property(e => e.Check).HasColumnName("check");

                entity.Property(e => e.ConstraintName)
                    .HasColumnName("constraint_name")
                    .UseCollation("C");

                entity.Property(e => e.TableName)
                    .HasColumnName("table_name")
                    .UseCollation("C");

                entity.Property(e => e.TableSchema)
                    .HasColumnName("table_schema")
                    .UseCollation("C");
            });

            modelBuilder.Entity<HdbComputedField>(entity =>
            {
                entity.HasKey(e => new { e.TableSchema, e.TableName, e.ComputedFieldName })
                    .HasName("hdb_computed_field_pkey");

                entity.ToTable("hdb_computed_field", "hdb_catalog");

                entity.Property(e => e.TableSchema).HasColumnName("table_schema");

                entity.Property(e => e.TableName).HasColumnName("table_name");

                entity.Property(e => e.ComputedFieldName).HasColumnName("computed_field_name");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.Definition)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("definition");
            });

            modelBuilder.Entity<HdbComputedFieldFunction>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_computed_field_function", "hdb_catalog");

                entity.Property(e => e.ComputedFieldName).HasColumnName("computed_field_name");

                entity.Property(e => e.FunctionName).HasColumnName("function_name");

                entity.Property(e => e.FunctionSchema).HasColumnName("function_schema");

                entity.Property(e => e.TableName).HasColumnName("table_name");

                entity.Property(e => e.TableSchema).HasColumnName("table_schema");
            });

            modelBuilder.Entity<HdbCronEvent>(entity =>
            {
                entity.ToTable("hdb_cron_events", "hdb_catalog");

                entity.HasIndex(e => e.Status, "hdb_cron_event_status");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.NextRetryAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("next_retry_at");

                entity.Property(e => e.ScheduledTime)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("scheduled_time");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasDefaultValueSql("'scheduled'::text");

                entity.Property(e => e.Tries).HasColumnName("tries");

                entity.Property(e => e.TriggerName)
                    .IsRequired()
                    .HasColumnName("trigger_name");

                entity.HasOne(d => d.TriggerNameNavigation)
                    .WithMany(p => p.HdbCronEvents)
                    .HasForeignKey(d => d.TriggerName)
                    .HasConstraintName("hdb_cron_events_trigger_name_fkey");
            });

            modelBuilder.Entity<HdbCronEventInvocationLog>(entity =>
            {
                entity.ToTable("hdb_cron_event_invocation_logs", "hdb_catalog");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.EventId).HasColumnName("event_id");

                entity.Property(e => e.Request)
                    .HasColumnType("json")
                    .HasColumnName("request");

                entity.Property(e => e.Response)
                    .HasColumnType("json")
                    .HasColumnName("response");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.HdbCronEventInvocationLogs)
                    .HasForeignKey(d => d.EventId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("hdb_cron_event_invocation_logs_event_id_fkey");
            });

            modelBuilder.Entity<HdbCronEventsStat>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_cron_events_stats", "hdb_catalog");

                entity.Property(e => e.MaxScheduledTime)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("max_scheduled_time");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.UpcomingEventsCount).HasColumnName("upcoming_events_count");
            });

            modelBuilder.Entity<HdbCronTrigger>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("hdb_cron_triggers_pkey");

                entity.ToTable("hdb_cron_triggers", "hdb_catalog");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.CronSchedule)
                    .IsRequired()
                    .HasColumnName("cron_schedule");

                entity.Property(e => e.HeaderConf)
                    .HasColumnType("json")
                    .HasColumnName("header_conf");

                entity.Property(e => e.IncludeInMetadata).HasColumnName("include_in_metadata");

                entity.Property(e => e.Payload)
                    .HasColumnType("json")
                    .HasColumnName("payload");

                entity.Property(e => e.RetryConf)
                    .HasColumnType("json")
                    .HasColumnName("retry_conf");

                entity.Property(e => e.WebhookConf)
                    .IsRequired()
                    .HasColumnType("json")
                    .HasColumnName("webhook_conf");
            });

            modelBuilder.Entity<HdbCustomType>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_custom_types", "hdb_catalog");

                entity.Property(e => e.CustomTypes)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("custom_types");
            });

            modelBuilder.Entity<HdbForeignKeyConstraint>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_foreign_key_constraint", "hdb_catalog");

                entity.Property(e => e.ColumnMapping)
                    .HasColumnType("json")
                    .HasColumnName("column_mapping");

                entity.Property(e => e.Columns)
                    .HasColumnType("json")
                    .HasColumnName("columns");

                entity.Property(e => e.ConstraintName)
                    .HasColumnName("constraint_name")
                    .UseCollation("C");

                entity.Property(e => e.ConstraintOid).HasColumnName("constraint_oid");

                entity.Property(e => e.OnDelete).HasColumnName("on_delete");

                entity.Property(e => e.OnUpdate).HasColumnName("on_update");

                entity.Property(e => e.RefColumns)
                    .HasColumnType("json")
                    .HasColumnName("ref_columns");

                entity.Property(e => e.RefTable)
                    .HasColumnName("ref_table")
                    .UseCollation("C");

                entity.Property(e => e.RefTableTableSchema)
                    .HasColumnName("ref_table_table_schema")
                    .UseCollation("C");

                entity.Property(e => e.TableName)
                    .HasColumnName("table_name")
                    .UseCollation("C");

                entity.Property(e => e.TableSchema)
                    .HasColumnName("table_schema")
                    .UseCollation("C");
            });

            modelBuilder.Entity<HdbFunction>(entity =>
            {
                entity.HasKey(e => new { e.FunctionSchema, e.FunctionName })
                    .HasName("hdb_function_pkey");

                entity.ToTable("hdb_function", "hdb_catalog");

                entity.Property(e => e.FunctionSchema).HasColumnName("function_schema");

                entity.Property(e => e.FunctionName).HasColumnName("function_name");

                entity.Property(e => e.Configuration)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("configuration")
                    .HasDefaultValueSql("'{}'::jsonb");

                entity.Property(e => e.IsSystemDefined)
                    .HasColumnName("is_system_defined")
                    .HasDefaultValueSql("false");
            });

            modelBuilder.Entity<HdbFunctionAgg>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_function_agg", "hdb_catalog");

                entity.Property(e => e.DefaultArgs).HasColumnName("default_args");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .UseCollation("C");

                entity.Property(e => e.FunctionDefinition).HasColumnName("function_definition");

                entity.Property(e => e.FunctionName)
                    .HasColumnName("function_name")
                    .UseCollation("C");

                entity.Property(e => e.FunctionOid).HasColumnName("function_oid");

                entity.Property(e => e.FunctionSchema)
                    .HasColumnName("function_schema")
                    .UseCollation("C");

                entity.Property(e => e.FunctionType).HasColumnName("function_type");

                entity.Property(e => e.HasVariadic).HasColumnName("has_variadic");

                entity.Property(e => e.InputArgNames)
                    .HasColumnType("json")
                    .HasColumnName("input_arg_names");

                entity.Property(e => e.InputArgTypes)
                    .HasColumnType("json")
                    .HasColumnName("input_arg_types");

                entity.Property(e => e.ReturnTypeName)
                    .HasColumnName("return_type_name")
                    .UseCollation("C");

                entity.Property(e => e.ReturnTypeSchema)
                    .HasColumnName("return_type_schema")
                    .UseCollation("C");

                entity.Property(e => e.ReturnTypeType).HasColumnName("return_type_type");

                entity.Property(e => e.ReturnsSet).HasColumnName("returns_set");
            });

            modelBuilder.Entity<HdbFunctionInfoAgg>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_function_info_agg", "hdb_catalog");

                entity.Property(e => e.FunctionInfo)
                    .HasColumnType("json")
                    .HasColumnName("function_info");

                entity.Property(e => e.FunctionName)
                    .HasColumnName("function_name")
                    .UseCollation("C");

                entity.Property(e => e.FunctionSchema)
                    .HasColumnName("function_schema")
                    .UseCollation("C");
            });

            modelBuilder.Entity<HdbPermissionAgg>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_permission_agg", "hdb_catalog");

                entity.Property(e => e.Permissions)
                    .HasColumnType("json")
                    .HasColumnName("permissions");

                entity.Property(e => e.RoleName).HasColumnName("role_name");
            });

            modelBuilder.Entity<HdbPrimaryKey>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_primary_key", "hdb_catalog");

                entity.Property(e => e.Columns)
                    .HasColumnType("json")
                    .HasColumnName("columns");
            });

            modelBuilder.Entity<HdbQueryCollection>(entity =>
            {
                entity.HasKey(e => e.CollectionName)
                    .HasName("hdb_query_collection_pkey");

                entity.ToTable("hdb_query_collection", "hdb_catalog");

                entity.Property(e => e.CollectionName).HasColumnName("collection_name");

                entity.Property(e => e.CollectionDefn)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("collection_defn");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.IsSystemDefined)
                    .HasColumnName("is_system_defined")
                    .HasDefaultValueSql("false");
            });

            modelBuilder.Entity<HdbRole>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_role", "hdb_catalog");

                entity.Property(e => e.RoleName).HasColumnName("role_name");
            });

            modelBuilder.Entity<HdbScheduledEvent>(entity =>
            {
                entity.ToTable("hdb_scheduled_events", "hdb_catalog");

                entity.HasIndex(e => e.Status, "hdb_scheduled_event_status");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.HeaderConf)
                    .HasColumnType("json")
                    .HasColumnName("header_conf");

                entity.Property(e => e.NextRetryAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("next_retry_at");

                entity.Property(e => e.Payload)
                    .HasColumnType("json")
                    .HasColumnName("payload");

                entity.Property(e => e.RetryConf)
                    .HasColumnType("json")
                    .HasColumnName("retry_conf");

                entity.Property(e => e.ScheduledTime)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("scheduled_time");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasDefaultValueSql("'scheduled'::text");

                entity.Property(e => e.Tries).HasColumnName("tries");

                entity.Property(e => e.WebhookConf)
                    .IsRequired()
                    .HasColumnType("json")
                    .HasColumnName("webhook_conf");
            });

            modelBuilder.Entity<HdbScheduledEventInvocationLog>(entity =>
            {
                entity.ToTable("hdb_scheduled_event_invocation_logs", "hdb_catalog");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.EventId).HasColumnName("event_id");

                entity.Property(e => e.Request)
                    .HasColumnType("json")
                    .HasColumnName("request");

                entity.Property(e => e.Response)
                    .HasColumnType("json")
                    .HasColumnName("response");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.HdbScheduledEventInvocationLogs)
                    .HasForeignKey(d => d.EventId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("hdb_scheduled_event_invocation_logs_event_id_fkey");
            });

            modelBuilder.Entity<HdbSchemaUpdateEvent>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_schema_update_event", "hdb_catalog");

                entity.Property(e => e.InstanceId).HasColumnName("instance_id");

                entity.Property(e => e.Invalidations)
                    .IsRequired()
                    .HasColumnType("json")
                    .HasColumnName("invalidations");

                entity.Property(e => e.OccurredAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("occurred_at")
                    .HasDefaultValueSql("now()");
            });

            modelBuilder.Entity<HdbTableInfoAgg>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_table_info_agg", "hdb_catalog");

                entity.Property(e => e.Info)
                    .HasColumnType("jsonb")
                    .HasColumnName("info");
            });

            modelBuilder.Entity<HdbUniqueConstraint>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("hdb_unique_constraint", "hdb_catalog");

                entity.Property(e => e.Columns)
                    .HasColumnType("json")
                    .HasColumnName("columns");
            });

            modelBuilder.Entity<HdbVersion>(entity =>
            {
                entity.HasKey(e => e.HasuraUuid)
                    .HasName("hdb_version_pkey");

                entity.ToTable("hdb_version", "hdb_catalog");

                entity.Property(e => e.HasuraUuid)
                    .HasColumnName("hasura_uuid")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.CliState)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("cli_state")
                    .HasDefaultValueSql("'{}'::jsonb");

                entity.Property(e => e.ConsoleState)
                    .IsRequired()
                    .HasColumnType("jsonb")
                    .HasColumnName("console_state")
                    .HasDefaultValueSql("'{}'::jsonb");

                entity.Property(e => e.UpgradedOn)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("upgraded_on");

                entity.Property(e => e.Version)
                    .IsRequired()
                    .HasColumnName("version");
            });

            modelBuilder.Entity<List>(entity =>
            {
                entity.ToTable("list");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Lists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("list_user_id_fkey");
            });

            modelBuilder.Entity<ListItem>(entity =>
            {
                entity.ToTable("list_items");

                entity.HasIndex(e => new { e.Name, e.List, e.Comment }, "list_items_name_list_comment_key")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.Category).HasColumnName("category");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.IsCompleted).HasColumnName("is_completed");

                entity.Property(e => e.List).HasColumnName("list");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Other).HasColumnName("other");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.Recipes)
                    .HasColumnType("jsonb")
                    .HasColumnName("recipes");

                entity.Property(e => e.Unit).HasColumnName("unit");

                entity.HasOne(d => d.ListNavigation)
                    .WithMany(p => p.ListItems)
                    .HasForeignKey(d => d.List)
                    .HasConstraintName("list_items_list_fkey");
            });

            modelBuilder.Entity<MigrationSetting>(entity =>
            {
                entity.HasKey(e => e.Setting)
                    .HasName("migration_settings_pkey");

                entity.ToTable("migration_settings", "hdb_catalog");

                entity.Property(e => e.Setting).HasColumnName("setting");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value");
            });

            modelBuilder.Entity<Planner>(entity =>
            {
                entity.HasKey(e => new { e.Date, e.RecipeId, e.Index })
                    .HasName("planner_pkey");

                entity.ToTable("planner");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.RecipeId).HasColumnName("recipe_id");

                entity.Property(e => e.Index).HasColumnName("index");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasColumnName("user_id");

                entity.HasOne(d => d.Recipe)
                    .WithMany(p => p.Planners)
                    .HasForeignKey(d => d.RecipeId)
                    .HasConstraintName("planner_recipe_id_fkey");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Planners)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("planner_user_id_fkey");
            });

            modelBuilder.Entity<Recipe>(entity =>
            {
                entity.ToTable("recipe");

                entity.HasIndex(e => e.Id, "recipe_id_key")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp with time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Cuisine).HasColumnName("cuisine");

                entity.Property(e => e.Directions)
                    .HasColumnType("json")
                    .HasColumnName("directions");

                entity.Property(e => e.Img).HasColumnName("img");

                entity.Property(e => e.MealType).HasColumnName("meal_type");

                entity.Property(e => e.Owner)
                    .IsRequired()
                    .HasColumnName("owner");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("title");

                entity.Property(e => e.TotalTime).HasColumnName("total_time");

                entity.Property(e => e.Yields).HasColumnName("yields");

                entity.HasOne(d => d.OwnerNavigation)
                    .WithMany(p => p.Recipes)
                    .HasForeignKey(d => d.Owner)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("recipe_owner_fkey");
            });

            modelBuilder.Entity<RecipeIngredient>(entity =>
            {
                entity.ToTable("recipe_ingredients");

                entity.HasIndex(e => e.Id, "recipe_ingredients_id_key")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.FormattedText).HasColumnName("formatted_text");

                entity.Property(e => e.Index).HasColumnName("index");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Other).HasColumnName("other");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.RawText)
                    .IsRequired()
                    .HasColumnName("raw_text");

                entity.Property(e => e.RecipeId)
                    .IsRequired()
                    .HasColumnName("recipe_id");

                entity.Property(e => e.Unit).HasColumnName("unit");

                entity.HasOne(d => d.Recipe)
                    .WithMany(p => p.RecipeIngredients)
                    .HasForeignKey(d => d.RecipeId)
                    .HasConstraintName("recipe_ingredients_recipe_id_fkey");
            });

            modelBuilder.Entity<RemoteSchema>(entity =>
            {
                entity.ToTable("remote_schemas", "hdb_catalog");

                entity.HasIndex(e => e.Name, "remote_schemas_name_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.Definition)
                    .HasColumnType("json")
                    .HasColumnName("definition");

                entity.Property(e => e.Name).HasColumnName("name");
            });

            modelBuilder.Entity<SchemaMigration>(entity =>
            {
                entity.HasKey(e => e.Version)
                    .HasName("schema_migrations_pkey");

                entity.ToTable("schema_migrations", "hdb_catalog");

                entity.Property(e => e.Version)
                    .ValueGeneratedNever()
                    .HasColumnName("version");

                entity.Property(e => e.Dirty).HasColumnName("dirty");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email");

                entity.Property(e => e.Img).HasColumnName("img");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
