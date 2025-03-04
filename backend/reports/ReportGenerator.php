<?php
require_once '../libs/fpdf.php';

class ReportGenerator {
    public function generateReport($data) {
        $pdf = new FPDF();
        $pdf->AddPage();
        $pdf->SetFont('Arial', 'B', 12);
        $pdf->Cell(40, 10, 'Reporte de Datos');
        foreach ($data as $item) {
            $pdf->Ln();
            $pdf->Cell(40, 10, $item);
        }
        $pdf->Output();
    }
}
?>
