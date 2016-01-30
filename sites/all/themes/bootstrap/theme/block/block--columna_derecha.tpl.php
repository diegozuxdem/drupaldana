<?php
/**
 * @file
 * Default theme implementation to display a block.
 *
 * Available variables:
 * - $block->subject: Block title.
 * - $content: Block content.
 * - $block->module: Module that generated the block.
 * - $block->delta: An ID for the block, unique within each module.
 * - $block->region: The block region embedding the current block.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - block: The current template type, i.e., "theming hook".
 *   - block-[module]: The module generating the block. For example, the user
 *     module is responsible for handling the default user navigation block. In
 *     that case the class would be 'block-user'.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Helper variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $block_zebra: Outputs 'odd' and 'even' dependent on each block region.
 * - $zebra: Same output as $block_zebra but independent of any block region.
 * - $block_id: Counter dependent on each block region.
 * - $id: Same output as $block_id but independent of any block region.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 * - $block_html_id: A valid HTML ID and guaranteed unique.
 *
 * @see bootstrap_preprocess_block()
 * @see template_preprocess()
 * @see template_preprocess_block()
 * @see bootstrap_process_block()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>
<section id="<?php print $block_html_id; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <?php print render($title_prefix); ?>
    <?php if ($title): ?>
        <?php
        /*
        <?php if (!drupal_is_front_page()) { ?>
            <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
        <?php } ?>
        */
        ?>
    <?php endif;?>

    <?php print render($title_suffix); ?>
    <div class="primer-bloque">
        <h3><span class="glyphicon glyphicon-send" aria-hidden="true"></span> Solidez y Experiencia</h3>
        <p>Con 42 años de experiencia nos hemos posicionado como una de las primeras distribuidoras de la región Surcolombiana</p>
    </div>
    <div class="segundo-bloque">
        <h3><span class="glyphicon glyphicon-plane"></span> Parque automotor</h3>
        <p>La Compañía para la distribución de las mercancías dispone 6 vehículos contratados por prestación de servicios y 14 vehículos propios</p>
    </div>
    <div class="tercer-bloque">
        <h3><span class="glyphicon glyphicon-certificate"></span> Calidad y confianza</h3>
        <p>Comercializamos y distribuimos al por mayor y al detal bienes para el consumo masivo, buscamos ampliar el alcance territorial al centro y sur de Colombia con precios competitivos, alta calidad en los productos y oportunidad en las estrategias.</p>
    </div>
    <div class="cuarto-bloque">
        <h3><span class="glyphicon glyphicon-envelope"></span> Contáctenos en nuestras sedes</h3>
        <p>Nuestro liderazgo, nos hace su aliado estratégico para el crecimiento de su negocio, contáctese con nosotros.</p>
        <?php print $content ?>
    </div>

</section>
